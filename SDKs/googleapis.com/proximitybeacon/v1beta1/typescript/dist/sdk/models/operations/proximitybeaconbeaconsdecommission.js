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
var ProximitybeaconBeaconsDecommissionPathParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDecommissionPathParams, _super);
    function ProximitybeaconBeaconsDecommissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=beaconName" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionPathParams.prototype, "beaconName", void 0);
    return ProximitybeaconBeaconsDecommissionPathParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDecommissionPathParams };
var ProximitybeaconBeaconsDecommissionQueryParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDecommissionQueryParams, _super);
    function ProximitybeaconBeaconsDecommissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionQueryParams.prototype, "uploadProtocol", void 0);
    return ProximitybeaconBeaconsDecommissionQueryParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDecommissionQueryParams };
var ProximitybeaconBeaconsDecommissionSecurity = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDecommissionSecurity, _super);
    function ProximitybeaconBeaconsDecommissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProximitybeaconBeaconsDecommissionSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProximitybeaconBeaconsDecommissionSecurity.prototype, "oauth2c", void 0);
    return ProximitybeaconBeaconsDecommissionSecurity;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDecommissionSecurity };
var ProximitybeaconBeaconsDecommissionRequest = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDecommissionRequest, _super);
    function ProximitybeaconBeaconsDecommissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsDecommissionPathParams)
    ], ProximitybeaconBeaconsDecommissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsDecommissionQueryParams)
    ], ProximitybeaconBeaconsDecommissionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsDecommissionSecurity)
    ], ProximitybeaconBeaconsDecommissionRequest.prototype, "security", void 0);
    return ProximitybeaconBeaconsDecommissionRequest;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDecommissionRequest };
var ProximitybeaconBeaconsDecommissionResponse = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDecommissionResponse, _super);
    function ProximitybeaconBeaconsDecommissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDecommissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProximitybeaconBeaconsDecommissionResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProximitybeaconBeaconsDecommissionResponse.prototype, "statusCode", void 0);
    return ProximitybeaconBeaconsDecommissionResponse;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDecommissionResponse };
