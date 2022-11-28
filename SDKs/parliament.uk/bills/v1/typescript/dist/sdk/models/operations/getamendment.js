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
var GetAmendmentPathParams = /** @class */ (function (_super) {
    __extends(GetAmendmentPathParams, _super);
    function GetAmendmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=amendmentId" }),
        __metadata("design:type", Number)
    ], GetAmendmentPathParams.prototype, "amendmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" }),
        __metadata("design:type", Number)
    ], GetAmendmentPathParams.prototype, "billId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billStageId" }),
        __metadata("design:type", Number)
    ], GetAmendmentPathParams.prototype, "billStageId", void 0);
    return GetAmendmentPathParams;
}(SpeakeasyBase));
export { GetAmendmentPathParams };
var GetAmendmentRequest = /** @class */ (function (_super) {
    __extends(GetAmendmentRequest, _super);
    function GetAmendmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAmendmentPathParams)
    ], GetAmendmentRequest.prototype, "pathParams", void 0);
    return GetAmendmentRequest;
}(SpeakeasyBase));
export { GetAmendmentRequest };
var GetAmendmentResponse = /** @class */ (function (_super) {
    __extends(GetAmendmentResponse, _super);
    function GetAmendmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AmendmentDetail)
    ], GetAmendmentResponse.prototype, "amendmentDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAmendmentResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAmendmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAmendmentResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAmendmentResponse.prototype, "statusCode", void 0);
    return GetAmendmentResponse;
}(SpeakeasyBase));
export { GetAmendmentResponse };
