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
import * as shared from "../shared";
var PostWorkspaceIdMembersMemberIdActivitiesPathParams = /** @class */ (function (_super) {
    __extends(PostWorkspaceIdMembersMemberIdActivitiesPathParams, _super);
    function PostWorkspaceIdMembersMemberIdActivitiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" }),
        __metadata("design:type", String)
    ], PostWorkspaceIdMembersMemberIdActivitiesPathParams.prototype, "memberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], PostWorkspaceIdMembersMemberIdActivitiesPathParams.prototype, "workspaceId", void 0);
    return PostWorkspaceIdMembersMemberIdActivitiesPathParams;
}(SpeakeasyBase));
export { PostWorkspaceIdMembersMemberIdActivitiesPathParams };
var PostWorkspaceIdMembersMemberIdActivitiesSecurity = /** @class */ (function (_super) {
    __extends(PostWorkspaceIdMembersMemberIdActivitiesSecurity, _super);
    function PostWorkspaceIdMembersMemberIdActivitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], PostWorkspaceIdMembersMemberIdActivitiesSecurity.prototype, "bearer", void 0);
    return PostWorkspaceIdMembersMemberIdActivitiesSecurity;
}(SpeakeasyBase));
export { PostWorkspaceIdMembersMemberIdActivitiesSecurity };
var PostWorkspaceIdMembersMemberIdActivitiesRequest = /** @class */ (function (_super) {
    __extends(PostWorkspaceIdMembersMemberIdActivitiesRequest, _super);
    function PostWorkspaceIdMembersMemberIdActivitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostWorkspaceIdMembersMemberIdActivitiesPathParams)
    ], PostWorkspaceIdMembersMemberIdActivitiesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostWorkspaceIdMembersMemberIdActivitiesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostWorkspaceIdMembersMemberIdActivitiesSecurity)
    ], PostWorkspaceIdMembersMemberIdActivitiesRequest.prototype, "security", void 0);
    return PostWorkspaceIdMembersMemberIdActivitiesRequest;
}(SpeakeasyBase));
export { PostWorkspaceIdMembersMemberIdActivitiesRequest };
var PostWorkspaceIdMembersMemberIdActivitiesResponse = /** @class */ (function (_super) {
    __extends(PostWorkspaceIdMembersMemberIdActivitiesResponse, _super);
    function PostWorkspaceIdMembersMemberIdActivitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostWorkspaceIdMembersMemberIdActivitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostWorkspaceIdMembersMemberIdActivitiesResponse.prototype, "statusCode", void 0);
    return PostWorkspaceIdMembersMemberIdActivitiesResponse;
}(SpeakeasyBase));
export { PostWorkspaceIdMembersMemberIdActivitiesResponse };
