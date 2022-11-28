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
var CloudresourcemanagerProjectsMovePathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsMovePathParams, _super);
    function CloudresourcemanagerProjectsMovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMovePathParams.prototype, "name", void 0);
    return CloudresourcemanagerProjectsMovePathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsMovePathParams };
var CloudresourcemanagerProjectsMoveQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsMoveQueryParams, _super);
    function CloudresourcemanagerProjectsMoveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMoveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMoveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMoveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMoveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMoveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMoveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMoveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsMoveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMoveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMoveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMoveQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerProjectsMoveQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsMoveQueryParams };
var CloudresourcemanagerProjectsMoveSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsMoveSecurity, _super);
    function CloudresourcemanagerProjectsMoveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsMoveSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsMoveSecurity.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsMoveSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsMoveSecurity };
var CloudresourcemanagerProjectsMoveRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsMoveRequest, _super);
    function CloudresourcemanagerProjectsMoveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsMovePathParams)
    ], CloudresourcemanagerProjectsMoveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsMoveQueryParams)
    ], CloudresourcemanagerProjectsMoveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MoveProjectRequest)
    ], CloudresourcemanagerProjectsMoveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsMoveSecurity)
    ], CloudresourcemanagerProjectsMoveRequest.prototype, "security", void 0);
    return CloudresourcemanagerProjectsMoveRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsMoveRequest };
var CloudresourcemanagerProjectsMoveResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsMoveResponse, _super);
    function CloudresourcemanagerProjectsMoveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsMoveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudresourcemanagerProjectsMoveResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsMoveResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerProjectsMoveResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsMoveResponse };
