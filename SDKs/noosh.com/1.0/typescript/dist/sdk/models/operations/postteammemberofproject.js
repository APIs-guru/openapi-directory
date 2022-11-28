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
var PostTeamMemberOfProjectPathParams = /** @class */ (function (_super) {
    __extends(PostTeamMemberOfProjectPathParams, _super);
    function PostTeamMemberOfProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], PostTeamMemberOfProjectPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], PostTeamMemberOfProjectPathParams.prototype, "workgroupId", void 0);
    return PostTeamMemberOfProjectPathParams;
}(SpeakeasyBase));
export { PostTeamMemberOfProjectPathParams };
var PostTeamMemberOfProjectRequests = /** @class */ (function (_super) {
    __extends(PostTeamMemberOfProjectRequests, _super);
    function PostTeamMemberOfProjectRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostTeamMemberOfProjectRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" }),
        __metadata("design:type", Uint8Array)
    ], PostTeamMemberOfProjectRequests.prototype, "applicationXYaml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostTeamMemberOfProjectRequests.prototype, "teamMemberPo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" }),
        __metadata("design:type", Object)
    ], PostTeamMemberOfProjectRequests.prototype, "teamMemberPo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/csv" }),
        __metadata("design:type", Uint8Array)
    ], PostTeamMemberOfProjectRequests.prototype, "textCsv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostTeamMemberOfProjectRequests.prototype, "textXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" }),
        __metadata("design:type", Uint8Array)
    ], PostTeamMemberOfProjectRequests.prototype, "textXYaml", void 0);
    return PostTeamMemberOfProjectRequests;
}(SpeakeasyBase));
export { PostTeamMemberOfProjectRequests };
var PostTeamMemberOfProjectRequest = /** @class */ (function (_super) {
    __extends(PostTeamMemberOfProjectRequest, _super);
    function PostTeamMemberOfProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTeamMemberOfProjectPathParams)
    ], PostTeamMemberOfProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTeamMemberOfProjectRequests)
    ], PostTeamMemberOfProjectRequest.prototype, "request", void 0);
    return PostTeamMemberOfProjectRequest;
}(SpeakeasyBase));
export { PostTeamMemberOfProjectRequest };
var PostTeamMemberOfProjectResponse = /** @class */ (function (_super) {
    __extends(PostTeamMemberOfProjectResponse, _super);
    function PostTeamMemberOfProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostTeamMemberOfProjectResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTeamMemberOfProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostTeamMemberOfProjectResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTeamMemberOfProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostTeamMemberOfProjectResponse.prototype, "v1x1InvitedTeamMemberResultsVo", void 0);
    return PostTeamMemberOfProjectResponse;
}(SpeakeasyBase));
export { PostTeamMemberOfProjectResponse };
