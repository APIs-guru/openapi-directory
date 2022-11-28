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
var DnsManagedZonesDeletePathParams = /** @class */ (function (_super) {
    __extends(DnsManagedZonesDeletePathParams, _super);
    function DnsManagedZonesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedZone" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeletePathParams.prototype, "managedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeletePathParams.prototype, "project", void 0);
    return DnsManagedZonesDeletePathParams;
}(SpeakeasyBase));
export { DnsManagedZonesDeletePathParams };
var DnsManagedZonesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DnsManagedZonesDeleteQueryParams, _super);
    function DnsManagedZonesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsManagedZonesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DnsManagedZonesDeleteQueryParams;
}(SpeakeasyBase));
export { DnsManagedZonesDeleteQueryParams };
var DnsManagedZonesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesDeleteSecurityOption1, _super);
    function DnsManagedZonesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DnsManagedZonesDeleteSecurityOption1;
}(SpeakeasyBase));
export { DnsManagedZonesDeleteSecurityOption1 };
var DnsManagedZonesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesDeleteSecurityOption2, _super);
    function DnsManagedZonesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DnsManagedZonesDeleteSecurityOption2;
}(SpeakeasyBase));
export { DnsManagedZonesDeleteSecurityOption2 };
var DnsManagedZonesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DnsManagedZonesDeleteSecurity, _super);
    function DnsManagedZonesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesDeleteSecurityOption1)
    ], DnsManagedZonesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesDeleteSecurityOption2)
    ], DnsManagedZonesDeleteSecurity.prototype, "option2", void 0);
    return DnsManagedZonesDeleteSecurity;
}(SpeakeasyBase));
export { DnsManagedZonesDeleteSecurity };
var DnsManagedZonesDeleteRequest = /** @class */ (function (_super) {
    __extends(DnsManagedZonesDeleteRequest, _super);
    function DnsManagedZonesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesDeletePathParams)
    ], DnsManagedZonesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesDeleteQueryParams)
    ], DnsManagedZonesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesDeleteSecurity)
    ], DnsManagedZonesDeleteRequest.prototype, "security", void 0);
    return DnsManagedZonesDeleteRequest;
}(SpeakeasyBase));
export { DnsManagedZonesDeleteRequest };
var DnsManagedZonesDeleteResponse = /** @class */ (function (_super) {
    __extends(DnsManagedZonesDeleteResponse, _super);
    function DnsManagedZonesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsManagedZonesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsManagedZonesDeleteResponse.prototype, "statusCode", void 0);
    return DnsManagedZonesDeleteResponse;
}(SpeakeasyBase));
export { DnsManagedZonesDeleteResponse };
