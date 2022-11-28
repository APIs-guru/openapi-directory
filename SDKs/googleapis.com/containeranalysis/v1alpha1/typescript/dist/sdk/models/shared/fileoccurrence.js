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
import { License } from "./license";
// FileOccurrence
/**
 * FileOccurrence represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/
**/
var FileOccurrence = /** @class */ (function (_super) {
    __extends(FileOccurrence, _super);
    function FileOccurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributions" }),
        __metadata("design:type", Array)
    ], FileOccurrence.prototype, "attributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], FileOccurrence.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributors" }),
        __metadata("design:type", Array)
    ], FileOccurrence.prototype, "contributors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], FileOccurrence.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesLicenseInfo" }),
        __metadata("design:type", Array)
    ], FileOccurrence.prototype, "filesLicenseInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FileOccurrence.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseConcluded" }),
        __metadata("design:type", License)
    ], FileOccurrence.prototype, "licenseConcluded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notice" }),
        __metadata("design:type", String)
    ], FileOccurrence.prototype, "notice", void 0);
    return FileOccurrence;
}(SpeakeasyBase));
export { FileOccurrence };
