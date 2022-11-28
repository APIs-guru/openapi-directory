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
var CircuitsProvidersReadPathParams = /** @class */ (function (_super) {
    __extends(CircuitsProvidersReadPathParams, _super);
    function CircuitsProvidersReadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], CircuitsProvidersReadPathParams.prototype, "id", void 0);
    return CircuitsProvidersReadPathParams;
}(SpeakeasyBase));
export { CircuitsProvidersReadPathParams };
var CircuitsProvidersReadRequest = /** @class */ (function (_super) {
    __extends(CircuitsProvidersReadRequest, _super);
    function CircuitsProvidersReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CircuitsProvidersReadPathParams)
    ], CircuitsProvidersReadRequest.prototype, "pathParams", void 0);
    return CircuitsProvidersReadRequest;
}(SpeakeasyBase));
export { CircuitsProvidersReadRequest };
var CircuitsProvidersReadResponse = /** @class */ (function (_super) {
    __extends(CircuitsProvidersReadResponse, _super);
    function CircuitsProvidersReadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CircuitsProvidersReadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Provider)
    ], CircuitsProvidersReadResponse.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CircuitsProvidersReadResponse.prototype, "statusCode", void 0);
    return CircuitsProvidersReadResponse;
}(SpeakeasyBase));
export { CircuitsProvidersReadResponse };
