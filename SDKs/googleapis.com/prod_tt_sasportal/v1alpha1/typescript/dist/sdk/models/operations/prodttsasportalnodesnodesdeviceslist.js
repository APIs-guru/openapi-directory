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
var ProdTtSasportalNodesNodesDevicesListPathParams = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDevicesListPathParams, _super);
    function ProdTtSasportalNodesNodesDevicesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListPathParams.prototype, "parent", void 0);
    return ProdTtSasportalNodesNodesDevicesListPathParams;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDevicesListPathParams };
var ProdTtSasportalNodesNodesDevicesListQueryParams = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDevicesListQueryParams, _super);
    function ProdTtSasportalNodesNodesDevicesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListQueryParams.prototype, "uploadProtocol", void 0);
    return ProdTtSasportalNodesNodesDevicesListQueryParams;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDevicesListQueryParams };
var ProdTtSasportalNodesNodesDevicesListSecurity = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDevicesListSecurity, _super);
    function ProdTtSasportalNodesNodesDevicesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProdTtSasportalNodesNodesDevicesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProdTtSasportalNodesNodesDevicesListSecurity.prototype, "oauth2c", void 0);
    return ProdTtSasportalNodesNodesDevicesListSecurity;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDevicesListSecurity };
var ProdTtSasportalNodesNodesDevicesListRequest = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDevicesListRequest, _super);
    function ProdTtSasportalNodesNodesDevicesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesNodesDevicesListPathParams)
    ], ProdTtSasportalNodesNodesDevicesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesNodesDevicesListQueryParams)
    ], ProdTtSasportalNodesNodesDevicesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesNodesDevicesListSecurity)
    ], ProdTtSasportalNodesNodesDevicesListRequest.prototype, "security", void 0);
    return ProdTtSasportalNodesNodesDevicesListRequest;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDevicesListRequest };
var ProdTtSasportalNodesNodesDevicesListResponse = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDevicesListResponse, _super);
    function ProdTtSasportalNodesNodesDevicesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDevicesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SasPortalListDevicesResponse)
    ], ProdTtSasportalNodesNodesDevicesListResponse.prototype, "sasPortalListDevicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProdTtSasportalNodesNodesDevicesListResponse.prototype, "statusCode", void 0);
    return ProdTtSasportalNodesNodesDevicesListResponse;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDevicesListResponse };
