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
var RemoveMediaPathQueryParams = /** @class */ (function (_super) {
    __extends(RemoveMediaPathQueryParams, _super);
    function RemoveMediaPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], RemoveMediaPathQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], RemoveMediaPathQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshLibrary" }),
        __metadata("design:type", Boolean)
    ], RemoveMediaPathQueryParams.prototype, "refreshLibrary", void 0);
    return RemoveMediaPathQueryParams;
}(SpeakeasyBase));
export { RemoveMediaPathQueryParams };
var RemoveMediaPathSecurity = /** @class */ (function (_super) {
    __extends(RemoveMediaPathSecurity, _super);
    function RemoveMediaPathSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], RemoveMediaPathSecurity.prototype, "customAuthentication", void 0);
    return RemoveMediaPathSecurity;
}(SpeakeasyBase));
export { RemoveMediaPathSecurity };
var RemoveMediaPathRequest = /** @class */ (function (_super) {
    __extends(RemoveMediaPathRequest, _super);
    function RemoveMediaPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveMediaPathQueryParams)
    ], RemoveMediaPathRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveMediaPathSecurity)
    ], RemoveMediaPathRequest.prototype, "security", void 0);
    return RemoveMediaPathRequest;
}(SpeakeasyBase));
export { RemoveMediaPathRequest };
var RemoveMediaPathResponse = /** @class */ (function (_super) {
    __extends(RemoveMediaPathResponse, _super);
    function RemoveMediaPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveMediaPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveMediaPathResponse.prototype, "statusCode", void 0);
    return RemoveMediaPathResponse;
}(SpeakeasyBase));
export { RemoveMediaPathResponse };
