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
var GetPolicyModulePathParams = /** @class */ (function (_super) {
    __extends(GetPolicyModulePathParams, _super);
    function GetPolicyModulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPolicyModulePathParams.prototype, "id", void 0);
    return GetPolicyModulePathParams;
}(SpeakeasyBase));
export { GetPolicyModulePathParams };
var GetPolicyModuleQueryParams = /** @class */ (function (_super) {
    __extends(GetPolicyModuleQueryParams, _super);
    function GetPolicyModuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" }),
        __metadata("design:type", Boolean)
    ], GetPolicyModuleQueryParams.prototype, "pretty", void 0);
    return GetPolicyModuleQueryParams;
}(SpeakeasyBase));
export { GetPolicyModuleQueryParams };
var GetPolicyModuleRequest = /** @class */ (function (_super) {
    __extends(GetPolicyModuleRequest, _super);
    function GetPolicyModuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPolicyModulePathParams)
    ], GetPolicyModuleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPolicyModuleQueryParams)
    ], GetPolicyModuleRequest.prototype, "queryParams", void 0);
    return GetPolicyModuleRequest;
}(SpeakeasyBase));
export { GetPolicyModuleRequest };
var GetPolicyModuleResponse = /** @class */ (function (_super) {
    __extends(GetPolicyModuleResponse, _super);
    function GetPolicyModuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TwoHundredResult)
    ], GetPolicyModuleResponse.prototype, "twoHundredResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundred)
    ], GetPolicyModuleResponse.prototype, "fourHundred", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundredAndFour)
    ], GetPolicyModuleResponse.prototype, "fourHundredAndFour", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPolicyModuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPolicyModuleResponse.prototype, "statusCode", void 0);
    return GetPolicyModuleResponse;
}(SpeakeasyBase));
export { GetPolicyModuleResponse };
