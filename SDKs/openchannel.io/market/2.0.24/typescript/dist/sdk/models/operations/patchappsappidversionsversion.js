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
var PatchAppsAppIdVersionsVersionPathParams = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdVersionsVersionPathParams, _super);
    function PatchAppsAppIdVersionsVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionPathParams.prototype, "version", void 0);
    return PatchAppsAppIdVersionsVersionPathParams;
}(SpeakeasyBase));
export { PatchAppsAppIdVersionsVersionPathParams };
var PatchAppsAppIdVersionsVersionQueryParams = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdVersionsVersionQueryParams, _super);
    function PatchAppsAppIdVersionsVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionQueryParams.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionQueryParams.prototype, "allow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=approvalRequired" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionQueryParams.prototype, "approvalRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=attributes" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionQueryParams.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionQueryParams.prototype, "customData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionQueryParams.prototype, "developerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=restrict" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionQueryParams.prototype, "restrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionQueryParams.prototype, "type", void 0);
    return PatchAppsAppIdVersionsVersionQueryParams;
}(SpeakeasyBase));
export { PatchAppsAppIdVersionsVersionQueryParams };
var PatchAppsAppIdVersionsVersionRequest = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdVersionsVersionRequest, _super);
    function PatchAppsAppIdVersionsVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchAppsAppIdVersionsVersionPathParams)
    ], PatchAppsAppIdVersionsVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchAppsAppIdVersionsVersionQueryParams)
    ], PatchAppsAppIdVersionsVersionRequest.prototype, "queryParams", void 0);
    return PatchAppsAppIdVersionsVersionRequest;
}(SpeakeasyBase));
export { PatchAppsAppIdVersionsVersionRequest };
var PatchAppsAppIdVersionsVersionResponse = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdVersionsVersionResponse, _super);
    function PatchAppsAppIdVersionsVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatchAppsAppIdVersionsVersionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchAppsAppIdVersionsVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchAppsAppIdVersionsVersionResponse.prototype, "statusCode", void 0);
    return PatchAppsAppIdVersionsVersionResponse;
}(SpeakeasyBase));
export { PatchAppsAppIdVersionsVersionResponse };
