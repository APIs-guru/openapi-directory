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
var ContentLiasettingsSetinventoryverificationcontactPathParams = /** @class */ (function (_super) {
    __extends(ContentLiasettingsSetinventoryverificationcontactPathParams, _super);
    function ContentLiasettingsSetinventoryverificationcontactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactPathParams.prototype, "merchantId", void 0);
    return ContentLiasettingsSetinventoryverificationcontactPathParams;
}(SpeakeasyBase));
export { ContentLiasettingsSetinventoryverificationcontactPathParams };
var ContentLiasettingsSetinventoryverificationcontactQueryParams = /** @class */ (function (_super) {
    __extends(ContentLiasettingsSetinventoryverificationcontactQueryParams, _super);
    function ContentLiasettingsSetinventoryverificationcontactQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contactEmail" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contactName" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "contactName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactQueryParams.prototype, "uploadProtocol", void 0);
    return ContentLiasettingsSetinventoryverificationcontactQueryParams;
}(SpeakeasyBase));
export { ContentLiasettingsSetinventoryverificationcontactQueryParams };
var ContentLiasettingsSetinventoryverificationcontactSecurity = /** @class */ (function (_super) {
    __extends(ContentLiasettingsSetinventoryverificationcontactSecurity, _super);
    function ContentLiasettingsSetinventoryverificationcontactSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentLiasettingsSetinventoryverificationcontactSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentLiasettingsSetinventoryverificationcontactSecurity.prototype, "oauth2c", void 0);
    return ContentLiasettingsSetinventoryverificationcontactSecurity;
}(SpeakeasyBase));
export { ContentLiasettingsSetinventoryverificationcontactSecurity };
var ContentLiasettingsSetinventoryverificationcontactRequest = /** @class */ (function (_super) {
    __extends(ContentLiasettingsSetinventoryverificationcontactRequest, _super);
    function ContentLiasettingsSetinventoryverificationcontactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsSetinventoryverificationcontactPathParams)
    ], ContentLiasettingsSetinventoryverificationcontactRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsSetinventoryverificationcontactQueryParams)
    ], ContentLiasettingsSetinventoryverificationcontactRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentLiasettingsSetinventoryverificationcontactSecurity)
    ], ContentLiasettingsSetinventoryverificationcontactRequest.prototype, "security", void 0);
    return ContentLiasettingsSetinventoryverificationcontactRequest;
}(SpeakeasyBase));
export { ContentLiasettingsSetinventoryverificationcontactRequest };
var ContentLiasettingsSetinventoryverificationcontactResponse = /** @class */ (function (_super) {
    __extends(ContentLiasettingsSetinventoryverificationcontactResponse, _super);
    function ContentLiasettingsSetinventoryverificationcontactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentLiasettingsSetinventoryverificationcontactResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiasettingsSetInventoryVerificationContactResponse)
    ], ContentLiasettingsSetinventoryverificationcontactResponse.prototype, "liasettingsSetInventoryVerificationContactResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentLiasettingsSetinventoryverificationcontactResponse.prototype, "statusCode", void 0);
    return ContentLiasettingsSetinventoryverificationcontactResponse;
}(SpeakeasyBase));
export { ContentLiasettingsSetinventoryverificationcontactResponse };
