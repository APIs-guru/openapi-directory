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
var PostWorkspaceIdActivitiesPathParams = /** @class */ (function (_super) {
    __extends(PostWorkspaceIdActivitiesPathParams, _super);
    function PostWorkspaceIdActivitiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], PostWorkspaceIdActivitiesPathParams.prototype, "workspaceId", void 0);
    return PostWorkspaceIdActivitiesPathParams;
}(SpeakeasyBase));
export { PostWorkspaceIdActivitiesPathParams };
var PostWorkspaceIdActivitiesSecurity = /** @class */ (function (_super) {
    __extends(PostWorkspaceIdActivitiesSecurity, _super);
    function PostWorkspaceIdActivitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], PostWorkspaceIdActivitiesSecurity.prototype, "bearer", void 0);
    return PostWorkspaceIdActivitiesSecurity;
}(SpeakeasyBase));
export { PostWorkspaceIdActivitiesSecurity };
var PostWorkspaceIdActivitiesRequest = /** @class */ (function (_super) {
    __extends(PostWorkspaceIdActivitiesRequest, _super);
    function PostWorkspaceIdActivitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostWorkspaceIdActivitiesPathParams)
    ], PostWorkspaceIdActivitiesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ActivityAndIdentity)
    ], PostWorkspaceIdActivitiesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostWorkspaceIdActivitiesSecurity)
    ], PostWorkspaceIdActivitiesRequest.prototype, "security", void 0);
    return PostWorkspaceIdActivitiesRequest;
}(SpeakeasyBase));
export { PostWorkspaceIdActivitiesRequest };
var PostWorkspaceIdActivitiesResponse = /** @class */ (function (_super) {
    __extends(PostWorkspaceIdActivitiesResponse, _super);
    function PostWorkspaceIdActivitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostWorkspaceIdActivitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostWorkspaceIdActivitiesResponse.prototype, "statusCode", void 0);
    return PostWorkspaceIdActivitiesResponse;
}(SpeakeasyBase));
export { PostWorkspaceIdActivitiesResponse };
