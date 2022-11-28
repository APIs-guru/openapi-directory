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
var EnablePluginPathParamsInput = /** @class */ (function (_super) {
    __extends(EnablePluginPathParamsInput, _super);
    function EnablePluginPathParamsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pluginId" }),
        __metadata("design:type", String)
    ], EnablePluginPathParamsInput.prototype, "pluginId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", shared.Version)
    ], EnablePluginPathParamsInput.prototype, "version", void 0);
    return EnablePluginPathParamsInput;
}(SpeakeasyBase));
export { EnablePluginPathParamsInput };
var EnablePluginSecurity = /** @class */ (function (_super) {
    __extends(EnablePluginSecurity, _super);
    function EnablePluginSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], EnablePluginSecurity.prototype, "customAuthentication", void 0);
    return EnablePluginSecurity;
}(SpeakeasyBase));
export { EnablePluginSecurity };
var EnablePluginRequest = /** @class */ (function (_super) {
    __extends(EnablePluginRequest, _super);
    function EnablePluginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnablePluginPathParamsInput)
    ], EnablePluginRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnablePluginSecurity)
    ], EnablePluginRequest.prototype, "security", void 0);
    return EnablePluginRequest;
}(SpeakeasyBase));
export { EnablePluginRequest };
var EnablePluginResponse = /** @class */ (function (_super) {
    __extends(EnablePluginResponse, _super);
    function EnablePluginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnablePluginResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], EnablePluginResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnablePluginResponse.prototype, "statusCode", void 0);
    return EnablePluginResponse;
}(SpeakeasyBase));
export { EnablePluginResponse };
