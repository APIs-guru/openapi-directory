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
var CircuitsCircuitsPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(CircuitsCircuitsPartialUpdatePathParams, _super);
    function CircuitsCircuitsPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], CircuitsCircuitsPartialUpdatePathParams.prototype, "id", void 0);
    return CircuitsCircuitsPartialUpdatePathParams;
}(SpeakeasyBase));
export { CircuitsCircuitsPartialUpdatePathParams };
var CircuitsCircuitsPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(CircuitsCircuitsPartialUpdateRequest, _super);
    function CircuitsCircuitsPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CircuitsCircuitsPartialUpdatePathParams)
    ], CircuitsCircuitsPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WritableCircuitInput)
    ], CircuitsCircuitsPartialUpdateRequest.prototype, "request", void 0);
    return CircuitsCircuitsPartialUpdateRequest;
}(SpeakeasyBase));
export { CircuitsCircuitsPartialUpdateRequest };
var CircuitsCircuitsPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(CircuitsCircuitsPartialUpdateResponse, _super);
    function CircuitsCircuitsPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Circuit)
    ], CircuitsCircuitsPartialUpdateResponse.prototype, "circuit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CircuitsCircuitsPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CircuitsCircuitsPartialUpdateResponse.prototype, "statusCode", void 0);
    return CircuitsCircuitsPartialUpdateResponse;
}(SpeakeasyBase));
export { CircuitsCircuitsPartialUpdateResponse };
