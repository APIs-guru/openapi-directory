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
var ContentShoppingadsprogramGetPathParams = /** @class */ (function (_super) {
    __extends(ContentShoppingadsprogramGetPathParams, _super);
    function ContentShoppingadsprogramGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetPathParams.prototype, "merchantId", void 0);
    return ContentShoppingadsprogramGetPathParams;
}(SpeakeasyBase));
export { ContentShoppingadsprogramGetPathParams };
var ContentShoppingadsprogramGetQueryParams = /** @class */ (function (_super) {
    __extends(ContentShoppingadsprogramGetQueryParams, _super);
    function ContentShoppingadsprogramGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentShoppingadsprogramGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetQueryParams.prototype, "uploadProtocol", void 0);
    return ContentShoppingadsprogramGetQueryParams;
}(SpeakeasyBase));
export { ContentShoppingadsprogramGetQueryParams };
var ContentShoppingadsprogramGetSecurity = /** @class */ (function (_super) {
    __extends(ContentShoppingadsprogramGetSecurity, _super);
    function ContentShoppingadsprogramGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentShoppingadsprogramGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentShoppingadsprogramGetSecurity.prototype, "oauth2c", void 0);
    return ContentShoppingadsprogramGetSecurity;
}(SpeakeasyBase));
export { ContentShoppingadsprogramGetSecurity };
var ContentShoppingadsprogramGetRequest = /** @class */ (function (_super) {
    __extends(ContentShoppingadsprogramGetRequest, _super);
    function ContentShoppingadsprogramGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentShoppingadsprogramGetPathParams)
    ], ContentShoppingadsprogramGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentShoppingadsprogramGetQueryParams)
    ], ContentShoppingadsprogramGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentShoppingadsprogramGetSecurity)
    ], ContentShoppingadsprogramGetRequest.prototype, "security", void 0);
    return ContentShoppingadsprogramGetRequest;
}(SpeakeasyBase));
export { ContentShoppingadsprogramGetRequest };
var ContentShoppingadsprogramGetResponse = /** @class */ (function (_super) {
    __extends(ContentShoppingadsprogramGetResponse, _super);
    function ContentShoppingadsprogramGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentShoppingadsprogramGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ShoppingAdsProgramStatus)
    ], ContentShoppingadsprogramGetResponse.prototype, "shoppingAdsProgramStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentShoppingadsprogramGetResponse.prototype, "statusCode", void 0);
    return ContentShoppingadsprogramGetResponse;
}(SpeakeasyBase));
export { ContentShoppingadsprogramGetResponse };
