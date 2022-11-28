var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
// GooglePrivacyDlpV2CloudStorageRegexFileSet
/**
 * Message representing a set of files in a Cloud Storage bucket. Regular expressions are used to allow fine-grained control over which files in the bucket to include. Included files are those that match at least one item in `include_regex` and do not match any items in `exclude_regex`. Note that a file that matches items from both lists will _not_ be included. For a match to occur, the entire file path (i.e., everything in the url after the bucket name) must match the regular expression. For example, given the input `{bucket_name: "mybucket", include_regex: ["directory1/.*"], exclude_regex: ["directory1/excluded.*"]}`: * `gs://mybucket/directory1/myfile` will be included * `gs://mybucket/directory1/directory2/myfile` will be included (`.*` matches across `/`) * `gs://mybucket/directory0/directory1/myfile` will _not_ be included (the full path doesn't match any items in `include_regex`) * `gs://mybucket/directory1/excludedfile` will _not_ be included (the path matches an item in `exclude_regex`) If `include_regex` is left empty, it will match all files by default (this is equivalent to setting `include_regex: [".*"]`). Some other common use cases: * `{bucket_name: "mybucket", exclude_regex: [".*\.pdf"]}` will include all files in `mybucket` except for .pdf files * `{bucket_name: "mybucket", include_regex: ["directory/[^/]+"]}` will include all files directly under `gs://mybucket/directory/`, without matching across `/`
**/
var GooglePrivacyDlpV2CloudStorageRegexFileSet = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2CloudStorageRegexFileSet, _super);
    function GooglePrivacyDlpV2CloudStorageRegexFileSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CloudStorageRegexFileSet.prototype, "bucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeRegex" }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2CloudStorageRegexFileSet.prototype, "excludeRegex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeRegex" }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2CloudStorageRegexFileSet.prototype, "includeRegex", void 0);
    return GooglePrivacyDlpV2CloudStorageRegexFileSet;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2CloudStorageRegexFileSet };
