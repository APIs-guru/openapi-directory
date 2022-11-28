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
var NameTypePathParams = /** @class */ (function (_super) {
    __extends(NameTypePathParams, _super);
    function NameTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=properNoun" }),
        __metadata("design:type", String)
    ], NameTypePathParams.prototype, "properNoun", void 0);
    return NameTypePathParams;
}(SpeakeasyBase));
export { NameTypePathParams };
var NameTypeSecurity = /** @class */ (function (_super) {
    __extends(NameTypeSecurity, _super);
    function NameTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NameTypeSecurity.prototype, "apiKey", void 0);
    return NameTypeSecurity;
}(SpeakeasyBase));
export { NameTypeSecurity };
var NameTypeRequest = /** @class */ (function (_super) {
    __extends(NameTypeRequest, _super);
    function NameTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NameTypePathParams)
    ], NameTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NameTypeSecurity)
    ], NameTypeRequest.prototype, "security", void 0);
    return NameTypeRequest;
}(SpeakeasyBase));
export { NameTypeRequest };
var NameTypeResponse = /** @class */ (function (_super) {
    __extends(NameTypeResponse, _super);
    function NameTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NameTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProperNounCategorizedOut)
    ], NameTypeResponse.prototype, "properNounCategorizedOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NameTypeResponse.prototype, "statusCode", void 0);
    return NameTypeResponse;
}(SpeakeasyBase));
export { NameTypeResponse };
