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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// RepoSource
/**
 * Location of the source in a Google Cloud Source Repository.
**/
var RepoSource = /** @class */ (function (_super) {
    __extends(RepoSource, _super);
    function RepoSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=branchName" }),
        __metadata("design:type", String)
    ], RepoSource.prototype, "branchName", void 0);
    __decorate([
        Metadata({ data: "json, name=commitSha" }),
        __metadata("design:type", String)
    ], RepoSource.prototype, "commitSha", void 0);
    __decorate([
        Metadata({ data: "json, name=dir" }),
        __metadata("design:type", String)
    ], RepoSource.prototype, "dir", void 0);
    __decorate([
        Metadata({ data: "json, name=invertRegex" }),
        __metadata("design:type", Boolean)
    ], RepoSource.prototype, "invertRegex", void 0);
    __decorate([
        Metadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], RepoSource.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "json, name=repoName" }),
        __metadata("design:type", String)
    ], RepoSource.prototype, "repoName", void 0);
    __decorate([
        Metadata({ data: "json, name=tagName" }),
        __metadata("design:type", String)
    ], RepoSource.prototype, "tagName", void 0);
    return RepoSource;
}(SpeakeasyBase));
export { RepoSource };
