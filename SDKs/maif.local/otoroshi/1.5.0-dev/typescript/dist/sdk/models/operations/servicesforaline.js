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
var ServicesForALinePathParams = /** @class */ (function (_super) {
    __extends(ServicesForALinePathParams, _super);
    function ServicesForALinePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=line" }),
        __metadata("design:type", String)
    ], ServicesForALinePathParams.prototype, "line", void 0);
    return ServicesForALinePathParams;
}(SpeakeasyBase));
export { ServicesForALinePathParams };
var ServicesForALineSecurity = /** @class */ (function (_super) {
    __extends(ServicesForALineSecurity, _super);
    function ServicesForALineSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], ServicesForALineSecurity.prototype, "otoroshiAuth", void 0);
    return ServicesForALineSecurity;
}(SpeakeasyBase));
export { ServicesForALineSecurity };
var ServicesForALineRequest = /** @class */ (function (_super) {
    __extends(ServicesForALineRequest, _super);
    function ServicesForALineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicesForALinePathParams)
    ], ServicesForALineRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicesForALineSecurity)
    ], ServicesForALineRequest.prototype, "security", void 0);
    return ServicesForALineRequest;
}(SpeakeasyBase));
export { ServicesForALineRequest };
var ServicesForALineResponse = /** @class */ (function (_super) {
    __extends(ServicesForALineResponse, _super);
    function ServicesForALineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicesForALineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Service }),
        __metadata("design:type", Array)
    ], ServicesForALineResponse.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicesForALineResponse.prototype, "statusCode", void 0);
    return ServicesForALineResponse;
}(SpeakeasyBase));
export { ServicesForALineResponse };
