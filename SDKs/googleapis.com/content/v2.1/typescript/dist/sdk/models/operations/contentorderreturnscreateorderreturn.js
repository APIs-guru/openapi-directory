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
var ContentOrderreturnsCreateorderreturnPathParams = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsCreateorderreturnPathParams, _super);
    function ContentOrderreturnsCreateorderreturnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnPathParams.prototype, "merchantId", void 0);
    return ContentOrderreturnsCreateorderreturnPathParams;
}(SpeakeasyBase));
export { ContentOrderreturnsCreateorderreturnPathParams };
var ContentOrderreturnsCreateorderreturnQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsCreateorderreturnQueryParams, _super);
    function ContentOrderreturnsCreateorderreturnQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrderreturnsCreateorderreturnQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrderreturnsCreateorderreturnQueryParams;
}(SpeakeasyBase));
export { ContentOrderreturnsCreateorderreturnQueryParams };
var ContentOrderreturnsCreateorderreturnSecurity = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsCreateorderreturnSecurity, _super);
    function ContentOrderreturnsCreateorderreturnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrderreturnsCreateorderreturnSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrderreturnsCreateorderreturnSecurity.prototype, "oauth2c", void 0);
    return ContentOrderreturnsCreateorderreturnSecurity;
}(SpeakeasyBase));
export { ContentOrderreturnsCreateorderreturnSecurity };
var ContentOrderreturnsCreateorderreturnRequest = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsCreateorderreturnRequest, _super);
    function ContentOrderreturnsCreateorderreturnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreturnsCreateorderreturnPathParams)
    ], ContentOrderreturnsCreateorderreturnRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreturnsCreateorderreturnQueryParams)
    ], ContentOrderreturnsCreateorderreturnRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OrderreturnsCreateOrderReturnRequest)
    ], ContentOrderreturnsCreateorderreturnRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreturnsCreateorderreturnSecurity)
    ], ContentOrderreturnsCreateorderreturnRequest.prototype, "security", void 0);
    return ContentOrderreturnsCreateorderreturnRequest;
}(SpeakeasyBase));
export { ContentOrderreturnsCreateorderreturnRequest };
var ContentOrderreturnsCreateorderreturnResponse = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsCreateorderreturnResponse, _super);
    function ContentOrderreturnsCreateorderreturnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrderreturnsCreateorderreturnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrderreturnsCreateOrderReturnResponse)
    ], ContentOrderreturnsCreateorderreturnResponse.prototype, "orderreturnsCreateOrderReturnResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrderreturnsCreateorderreturnResponse.prototype, "statusCode", void 0);
    return ContentOrderreturnsCreateorderreturnResponse;
}(SpeakeasyBase));
export { ContentOrderreturnsCreateorderreturnResponse };
