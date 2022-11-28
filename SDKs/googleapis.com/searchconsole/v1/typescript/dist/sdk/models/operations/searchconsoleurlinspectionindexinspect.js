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
var SearchconsoleUrlInspectionIndexInspectQueryParams = /** @class */ (function (_super) {
    __extends(SearchconsoleUrlInspectionIndexInspectQueryParams, _super);
    function SearchconsoleUrlInspectionIndexInspectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SearchconsoleUrlInspectionIndexInspectQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SearchconsoleUrlInspectionIndexInspectQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SearchconsoleUrlInspectionIndexInspectQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SearchconsoleUrlInspectionIndexInspectQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SearchconsoleUrlInspectionIndexInspectQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SearchconsoleUrlInspectionIndexInspectQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SearchconsoleUrlInspectionIndexInspectQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SearchconsoleUrlInspectionIndexInspectQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SearchconsoleUrlInspectionIndexInspectQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SearchconsoleUrlInspectionIndexInspectQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SearchconsoleUrlInspectionIndexInspectQueryParams.prototype, "uploadProtocol", void 0);
    return SearchconsoleUrlInspectionIndexInspectQueryParams;
}(SpeakeasyBase));
export { SearchconsoleUrlInspectionIndexInspectQueryParams };
var SearchconsoleUrlInspectionIndexInspectSecurityOption1 = /** @class */ (function (_super) {
    __extends(SearchconsoleUrlInspectionIndexInspectSecurityOption1, _super);
    function SearchconsoleUrlInspectionIndexInspectSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SearchconsoleUrlInspectionIndexInspectSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SearchconsoleUrlInspectionIndexInspectSecurityOption1.prototype, "oauth2c", void 0);
    return SearchconsoleUrlInspectionIndexInspectSecurityOption1;
}(SpeakeasyBase));
export { SearchconsoleUrlInspectionIndexInspectSecurityOption1 };
var SearchconsoleUrlInspectionIndexInspectSecurityOption2 = /** @class */ (function (_super) {
    __extends(SearchconsoleUrlInspectionIndexInspectSecurityOption2, _super);
    function SearchconsoleUrlInspectionIndexInspectSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SearchconsoleUrlInspectionIndexInspectSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SearchconsoleUrlInspectionIndexInspectSecurityOption2.prototype, "oauth2c", void 0);
    return SearchconsoleUrlInspectionIndexInspectSecurityOption2;
}(SpeakeasyBase));
export { SearchconsoleUrlInspectionIndexInspectSecurityOption2 };
var SearchconsoleUrlInspectionIndexInspectSecurity = /** @class */ (function (_super) {
    __extends(SearchconsoleUrlInspectionIndexInspectSecurity, _super);
    function SearchconsoleUrlInspectionIndexInspectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SearchconsoleUrlInspectionIndexInspectSecurityOption1)
    ], SearchconsoleUrlInspectionIndexInspectSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SearchconsoleUrlInspectionIndexInspectSecurityOption2)
    ], SearchconsoleUrlInspectionIndexInspectSecurity.prototype, "option2", void 0);
    return SearchconsoleUrlInspectionIndexInspectSecurity;
}(SpeakeasyBase));
export { SearchconsoleUrlInspectionIndexInspectSecurity };
var SearchconsoleUrlInspectionIndexInspectRequest = /** @class */ (function (_super) {
    __extends(SearchconsoleUrlInspectionIndexInspectRequest, _super);
    function SearchconsoleUrlInspectionIndexInspectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchconsoleUrlInspectionIndexInspectQueryParams)
    ], SearchconsoleUrlInspectionIndexInspectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InspectUrlIndexRequest)
    ], SearchconsoleUrlInspectionIndexInspectRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchconsoleUrlInspectionIndexInspectSecurity)
    ], SearchconsoleUrlInspectionIndexInspectRequest.prototype, "security", void 0);
    return SearchconsoleUrlInspectionIndexInspectRequest;
}(SpeakeasyBase));
export { SearchconsoleUrlInspectionIndexInspectRequest };
var SearchconsoleUrlInspectionIndexInspectResponse = /** @class */ (function (_super) {
    __extends(SearchconsoleUrlInspectionIndexInspectResponse, _super);
    function SearchconsoleUrlInspectionIndexInspectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchconsoleUrlInspectionIndexInspectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InspectUrlIndexResponse)
    ], SearchconsoleUrlInspectionIndexInspectResponse.prototype, "inspectUrlIndexResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchconsoleUrlInspectionIndexInspectResponse.prototype, "statusCode", void 0);
    return SearchconsoleUrlInspectionIndexInspectResponse;
}(SpeakeasyBase));
export { SearchconsoleUrlInspectionIndexInspectResponse };
