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
var OsconfigProjectsPatchDeploymentsListPathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsListPathParams, _super);
    function OsconfigProjectsPatchDeploymentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListPathParams.prototype, "parent", void 0);
    return OsconfigProjectsPatchDeploymentsListPathParams;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsListPathParams };
var OsconfigProjectsPatchDeploymentsListQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsListQueryParams, _super);
    function OsconfigProjectsPatchDeploymentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsPatchDeploymentsListQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsListQueryParams };
var OsconfigProjectsPatchDeploymentsListSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsListSecurity, _super);
    function OsconfigProjectsPatchDeploymentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsPatchDeploymentsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsPatchDeploymentsListSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsPatchDeploymentsListSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsListSecurity };
var OsconfigProjectsPatchDeploymentsListRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsListRequest, _super);
    function OsconfigProjectsPatchDeploymentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchDeploymentsListPathParams)
    ], OsconfigProjectsPatchDeploymentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchDeploymentsListQueryParams)
    ], OsconfigProjectsPatchDeploymentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchDeploymentsListSecurity)
    ], OsconfigProjectsPatchDeploymentsListRequest.prototype, "security", void 0);
    return OsconfigProjectsPatchDeploymentsListRequest;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsListRequest };
var OsconfigProjectsPatchDeploymentsListResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchDeploymentsListResponse, _super);
    function OsconfigProjectsPatchDeploymentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchDeploymentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPatchDeploymentsResponse)
    ], OsconfigProjectsPatchDeploymentsListResponse.prototype, "listPatchDeploymentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsPatchDeploymentsListResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsPatchDeploymentsListResponse;
}(SpeakeasyBase));
export { OsconfigProjectsPatchDeploymentsListResponse };
