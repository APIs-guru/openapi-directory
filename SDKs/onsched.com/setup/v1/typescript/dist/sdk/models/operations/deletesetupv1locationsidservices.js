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
var DeleteSetupV1LocationsIdServicesPathParams = /** @class */ (function (_super) {
    __extends(DeleteSetupV1LocationsIdServicesPathParams, _super);
    function DeleteSetupV1LocationsIdServicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteSetupV1LocationsIdServicesPathParams.prototype, "id", void 0);
    return DeleteSetupV1LocationsIdServicesPathParams;
}(SpeakeasyBase));
export { DeleteSetupV1LocationsIdServicesPathParams };
var DeleteSetupV1LocationsIdServicesRequest = /** @class */ (function (_super) {
    __extends(DeleteSetupV1LocationsIdServicesRequest, _super);
    function DeleteSetupV1LocationsIdServicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSetupV1LocationsIdServicesPathParams)
    ], DeleteSetupV1LocationsIdServicesRequest.prototype, "pathParams", void 0);
    return DeleteSetupV1LocationsIdServicesRequest;
}(SpeakeasyBase));
export { DeleteSetupV1LocationsIdServicesRequest };
var DeleteSetupV1LocationsIdServicesResponse = /** @class */ (function (_super) {
    __extends(DeleteSetupV1LocationsIdServicesResponse, _super);
    function DeleteSetupV1LocationsIdServicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSetupV1LocationsIdServicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LocationViewModel)
    ], DeleteSetupV1LocationsIdServicesResponse.prototype, "locationViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSetupV1LocationsIdServicesResponse.prototype, "statusCode", void 0);
    return DeleteSetupV1LocationsIdServicesResponse;
}(SpeakeasyBase));
export { DeleteSetupV1LocationsIdServicesResponse };
