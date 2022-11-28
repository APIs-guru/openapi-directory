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
var DisablePluginPathParamsInput = /** @class */ (function (_super) {
    __extends(DisablePluginPathParamsInput, _super);
    function DisablePluginPathParamsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pluginId" }),
        __metadata("design:type", String)
    ], DisablePluginPathParamsInput.prototype, "pluginId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", shared.Version)
    ], DisablePluginPathParamsInput.prototype, "version", void 0);
    return DisablePluginPathParamsInput;
}(SpeakeasyBase));
export { DisablePluginPathParamsInput };
var DisablePluginSecurity = /** @class */ (function (_super) {
    __extends(DisablePluginSecurity, _super);
    function DisablePluginSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], DisablePluginSecurity.prototype, "customAuthentication", void 0);
    return DisablePluginSecurity;
}(SpeakeasyBase));
export { DisablePluginSecurity };
var DisablePluginRequest = /** @class */ (function (_super) {
    __extends(DisablePluginRequest, _super);
    function DisablePluginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisablePluginPathParamsInput)
    ], DisablePluginRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisablePluginSecurity)
    ], DisablePluginRequest.prototype, "security", void 0);
    return DisablePluginRequest;
}(SpeakeasyBase));
export { DisablePluginRequest };
var DisablePluginResponse = /** @class */ (function (_super) {
    __extends(DisablePluginResponse, _super);
    function DisablePluginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisablePluginResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisablePluginResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisablePluginResponse.prototype, "statusCode", void 0);
    return DisablePluginResponse;
}(SpeakeasyBase));
export { DisablePluginResponse };
