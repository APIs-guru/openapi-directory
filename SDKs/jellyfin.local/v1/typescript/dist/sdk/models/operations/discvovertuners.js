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
var DiscvoverTunersQueryParams = /** @class */ (function (_super) {
    __extends(DiscvoverTunersQueryParams, _super);
    function DiscvoverTunersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newDevicesOnly" }),
        __metadata("design:type", Boolean)
    ], DiscvoverTunersQueryParams.prototype, "newDevicesOnly", void 0);
    return DiscvoverTunersQueryParams;
}(SpeakeasyBase));
export { DiscvoverTunersQueryParams };
var DiscvoverTunersSecurity = /** @class */ (function (_super) {
    __extends(DiscvoverTunersSecurity, _super);
    function DiscvoverTunersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], DiscvoverTunersSecurity.prototype, "customAuthentication", void 0);
    return DiscvoverTunersSecurity;
}(SpeakeasyBase));
export { DiscvoverTunersSecurity };
var DiscvoverTunersRequest = /** @class */ (function (_super) {
    __extends(DiscvoverTunersRequest, _super);
    function DiscvoverTunersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscvoverTunersQueryParams)
    ], DiscvoverTunersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscvoverTunersSecurity)
    ], DiscvoverTunersRequest.prototype, "security", void 0);
    return DiscvoverTunersRequest;
}(SpeakeasyBase));
export { DiscvoverTunersRequest };
var DiscvoverTunersResponse = /** @class */ (function (_super) {
    __extends(DiscvoverTunersResponse, _super);
    function DiscvoverTunersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DiscvoverTunersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DiscvoverTunersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TunerHostInfo }),
        __metadata("design:type", Array)
    ], DiscvoverTunersResponse.prototype, "tunerHostInfos", void 0);
    return DiscvoverTunersResponse;
}(SpeakeasyBase));
export { DiscvoverTunersResponse };
