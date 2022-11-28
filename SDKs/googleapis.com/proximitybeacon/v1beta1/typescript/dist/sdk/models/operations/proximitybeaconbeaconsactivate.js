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
var ProximitybeaconBeaconsActivatePathParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsActivatePathParams, _super);
    function ProximitybeaconBeaconsActivatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=beaconName" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivatePathParams.prototype, "beaconName", void 0);
    return ProximitybeaconBeaconsActivatePathParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsActivatePathParams };
var ProximitybeaconBeaconsActivateQueryParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsActivateQueryParams, _super);
    function ProximitybeaconBeaconsActivateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateQueryParams.prototype, "uploadProtocol", void 0);
    return ProximitybeaconBeaconsActivateQueryParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsActivateQueryParams };
var ProximitybeaconBeaconsActivateSecurity = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsActivateSecurity, _super);
    function ProximitybeaconBeaconsActivateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProximitybeaconBeaconsActivateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProximitybeaconBeaconsActivateSecurity.prototype, "oauth2c", void 0);
    return ProximitybeaconBeaconsActivateSecurity;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsActivateSecurity };
var ProximitybeaconBeaconsActivateRequest = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsActivateRequest, _super);
    function ProximitybeaconBeaconsActivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsActivatePathParams)
    ], ProximitybeaconBeaconsActivateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsActivateQueryParams)
    ], ProximitybeaconBeaconsActivateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsActivateSecurity)
    ], ProximitybeaconBeaconsActivateRequest.prototype, "security", void 0);
    return ProximitybeaconBeaconsActivateRequest;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsActivateRequest };
var ProximitybeaconBeaconsActivateResponse = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsActivateResponse, _super);
    function ProximitybeaconBeaconsActivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsActivateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProximitybeaconBeaconsActivateResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProximitybeaconBeaconsActivateResponse.prototype, "statusCode", void 0);
    return ProximitybeaconBeaconsActivateResponse;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsActivateResponse };
