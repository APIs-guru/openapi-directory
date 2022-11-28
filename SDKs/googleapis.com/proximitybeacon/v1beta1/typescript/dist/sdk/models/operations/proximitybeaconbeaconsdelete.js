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
var ProximitybeaconBeaconsDeletePathParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDeletePathParams, _super);
    function ProximitybeaconBeaconsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=beaconName" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeletePathParams.prototype, "beaconName", void 0);
    return ProximitybeaconBeaconsDeletePathParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDeletePathParams };
var ProximitybeaconBeaconsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDeleteQueryParams, _super);
    function ProximitybeaconBeaconsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ProximitybeaconBeaconsDeleteQueryParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDeleteQueryParams };
var ProximitybeaconBeaconsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDeleteSecurity, _super);
    function ProximitybeaconBeaconsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProximitybeaconBeaconsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProximitybeaconBeaconsDeleteSecurity.prototype, "oauth2c", void 0);
    return ProximitybeaconBeaconsDeleteSecurity;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDeleteSecurity };
var ProximitybeaconBeaconsDeleteRequest = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDeleteRequest, _super);
    function ProximitybeaconBeaconsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsDeletePathParams)
    ], ProximitybeaconBeaconsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsDeleteQueryParams)
    ], ProximitybeaconBeaconsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsDeleteSecurity)
    ], ProximitybeaconBeaconsDeleteRequest.prototype, "security", void 0);
    return ProximitybeaconBeaconsDeleteRequest;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDeleteRequest };
var ProximitybeaconBeaconsDeleteResponse = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDeleteResponse, _super);
    function ProximitybeaconBeaconsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProximitybeaconBeaconsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProximitybeaconBeaconsDeleteResponse.prototype, "statusCode", void 0);
    return ProximitybeaconBeaconsDeleteResponse;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDeleteResponse };
