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
var DiasporaPathParams = /** @class */ (function (_super) {
    __extends(DiasporaPathParams, _super);
    function DiasporaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" }),
        __metadata("design:type", String)
    ], DiasporaPathParams.prototype, "countryIso2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" }),
        __metadata("design:type", String)
    ], DiasporaPathParams.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" }),
        __metadata("design:type", String)
    ], DiasporaPathParams.prototype, "lastName", void 0);
    return DiasporaPathParams;
}(SpeakeasyBase));
export { DiasporaPathParams };
var DiasporaSecurity = /** @class */ (function (_super) {
    __extends(DiasporaSecurity, _super);
    function DiasporaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DiasporaSecurity.prototype, "apiKey", void 0);
    return DiasporaSecurity;
}(SpeakeasyBase));
export { DiasporaSecurity };
var DiasporaRequest = /** @class */ (function (_super) {
    __extends(DiasporaRequest, _super);
    function DiasporaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiasporaPathParams)
    ], DiasporaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiasporaSecurity)
    ], DiasporaRequest.prototype, "security", void 0);
    return DiasporaRequest;
}(SpeakeasyBase));
export { DiasporaRequest };
var DiasporaResponse = /** @class */ (function (_super) {
    __extends(DiasporaResponse, _super);
    function DiasporaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DiasporaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FirstLastNameDiasporaedOut)
    ], DiasporaResponse.prototype, "firstLastNameDiasporaedOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DiasporaResponse.prototype, "statusCode", void 0);
    return DiasporaResponse;
}(SpeakeasyBase));
export { DiasporaResponse };
