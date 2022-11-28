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
var SasportalNodesNodesDeploymentsListPathParams = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDeploymentsListPathParams, _super);
    function SasportalNodesNodesDeploymentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListPathParams.prototype, "parent", void 0);
    return SasportalNodesNodesDeploymentsListPathParams;
}(SpeakeasyBase));
export { SasportalNodesNodesDeploymentsListPathParams };
var SasportalNodesNodesDeploymentsListQueryParams = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDeploymentsListQueryParams, _super);
    function SasportalNodesNodesDeploymentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListQueryParams.prototype, "uploadProtocol", void 0);
    return SasportalNodesNodesDeploymentsListQueryParams;
}(SpeakeasyBase));
export { SasportalNodesNodesDeploymentsListQueryParams };
var SasportalNodesNodesDeploymentsListSecurity = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDeploymentsListSecurity, _super);
    function SasportalNodesNodesDeploymentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SasportalNodesNodesDeploymentsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SasportalNodesNodesDeploymentsListSecurity.prototype, "oauth2c", void 0);
    return SasportalNodesNodesDeploymentsListSecurity;
}(SpeakeasyBase));
export { SasportalNodesNodesDeploymentsListSecurity };
var SasportalNodesNodesDeploymentsListRequest = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDeploymentsListRequest, _super);
    function SasportalNodesNodesDeploymentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesNodesDeploymentsListPathParams)
    ], SasportalNodesNodesDeploymentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesNodesDeploymentsListQueryParams)
    ], SasportalNodesNodesDeploymentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesNodesDeploymentsListSecurity)
    ], SasportalNodesNodesDeploymentsListRequest.prototype, "security", void 0);
    return SasportalNodesNodesDeploymentsListRequest;
}(SpeakeasyBase));
export { SasportalNodesNodesDeploymentsListRequest };
var SasportalNodesNodesDeploymentsListResponse = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDeploymentsListResponse, _super);
    function SasportalNodesNodesDeploymentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SasportalNodesNodesDeploymentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SasPortalListDeploymentsResponse)
    ], SasportalNodesNodesDeploymentsListResponse.prototype, "sasPortalListDeploymentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SasportalNodesNodesDeploymentsListResponse.prototype, "statusCode", void 0);
    return SasportalNodesNodesDeploymentsListResponse;
}(SpeakeasyBase));
export { SasportalNodesNodesDeploymentsListResponse };
