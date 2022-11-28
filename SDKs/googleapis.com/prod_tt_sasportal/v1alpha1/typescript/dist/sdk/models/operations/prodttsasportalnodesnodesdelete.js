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
var ProdTtSasportalNodesNodesDeletePathParams = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDeletePathParams, _super);
    function ProdTtSasportalNodesNodesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeletePathParams.prototype, "name", void 0);
    return ProdTtSasportalNodesNodesDeletePathParams;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDeletePathParams };
var ProdTtSasportalNodesNodesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDeleteQueryParams, _super);
    function ProdTtSasportalNodesNodesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProdTtSasportalNodesNodesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ProdTtSasportalNodesNodesDeleteQueryParams;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDeleteQueryParams };
var ProdTtSasportalNodesNodesDeleteSecurity = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDeleteSecurity, _super);
    function ProdTtSasportalNodesNodesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProdTtSasportalNodesNodesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProdTtSasportalNodesNodesDeleteSecurity.prototype, "oauth2c", void 0);
    return ProdTtSasportalNodesNodesDeleteSecurity;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDeleteSecurity };
var ProdTtSasportalNodesNodesDeleteRequest = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDeleteRequest, _super);
    function ProdTtSasportalNodesNodesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesNodesDeletePathParams)
    ], ProdTtSasportalNodesNodesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesNodesDeleteQueryParams)
    ], ProdTtSasportalNodesNodesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesNodesDeleteSecurity)
    ], ProdTtSasportalNodesNodesDeleteRequest.prototype, "security", void 0);
    return ProdTtSasportalNodesNodesDeleteRequest;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDeleteRequest };
var ProdTtSasportalNodesNodesDeleteResponse = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesNodesDeleteResponse, _super);
    function ProdTtSasportalNodesNodesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesNodesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProdTtSasportalNodesNodesDeleteResponse.prototype, "sasPortalEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProdTtSasportalNodesNodesDeleteResponse.prototype, "statusCode", void 0);
    return ProdTtSasportalNodesNodesDeleteResponse;
}(SpeakeasyBase));
export { ProdTtSasportalNodesNodesDeleteResponse };
