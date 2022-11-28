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
var DeleteTunerHostQueryParams = /** @class */ (function (_super) {
    __extends(DeleteTunerHostQueryParams, _super);
    function DeleteTunerHostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DeleteTunerHostQueryParams.prototype, "id", void 0);
    return DeleteTunerHostQueryParams;
}(SpeakeasyBase));
export { DeleteTunerHostQueryParams };
var DeleteTunerHostSecurity = /** @class */ (function (_super) {
    __extends(DeleteTunerHostSecurity, _super);
    function DeleteTunerHostSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], DeleteTunerHostSecurity.prototype, "customAuthentication", void 0);
    return DeleteTunerHostSecurity;
}(SpeakeasyBase));
export { DeleteTunerHostSecurity };
var DeleteTunerHostRequest = /** @class */ (function (_super) {
    __extends(DeleteTunerHostRequest, _super);
    function DeleteTunerHostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteTunerHostQueryParams)
    ], DeleteTunerHostRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteTunerHostSecurity)
    ], DeleteTunerHostRequest.prototype, "security", void 0);
    return DeleteTunerHostRequest;
}(SpeakeasyBase));
export { DeleteTunerHostRequest };
var DeleteTunerHostResponse = /** @class */ (function (_super) {
    __extends(DeleteTunerHostResponse, _super);
    function DeleteTunerHostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteTunerHostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteTunerHostResponse.prototype, "statusCode", void 0);
    return DeleteTunerHostResponse;
}(SpeakeasyBase));
export { DeleteTunerHostResponse };
