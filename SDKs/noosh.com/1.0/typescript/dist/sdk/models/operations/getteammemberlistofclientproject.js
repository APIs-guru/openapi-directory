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
var GetTeamMemberListOfClientProjectPathParams = /** @class */ (function (_super) {
    __extends(GetTeamMemberListOfClientProjectPathParams, _super);
    function GetTeamMemberListOfClientProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], GetTeamMemberListOfClientProjectPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], GetTeamMemberListOfClientProjectPathParams.prototype, "workgroupId", void 0);
    return GetTeamMemberListOfClientProjectPathParams;
}(SpeakeasyBase));
export { GetTeamMemberListOfClientProjectPathParams };
var GetTeamMemberListOfClientProjectRequest = /** @class */ (function (_super) {
    __extends(GetTeamMemberListOfClientProjectRequest, _super);
    function GetTeamMemberListOfClientProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMemberListOfClientProjectPathParams)
    ], GetTeamMemberListOfClientProjectRequest.prototype, "pathParams", void 0);
    return GetTeamMemberListOfClientProjectRequest;
}(SpeakeasyBase));
export { GetTeamMemberListOfClientProjectRequest };
var GetTeamMemberListOfClientProjectResponse = /** @class */ (function (_super) {
    __extends(GetTeamMemberListOfClientProjectResponse, _super);
    function GetTeamMemberListOfClientProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTeamMemberListOfClientProjectResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamMemberListOfClientProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetTeamMemberListOfClientProjectResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamMemberListOfClientProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetTeamMemberListOfClientProjectResponse.prototype, "teamMemberListVo", void 0);
    return GetTeamMemberListOfClientProjectResponse;
}(SpeakeasyBase));
export { GetTeamMemberListOfClientProjectResponse };
