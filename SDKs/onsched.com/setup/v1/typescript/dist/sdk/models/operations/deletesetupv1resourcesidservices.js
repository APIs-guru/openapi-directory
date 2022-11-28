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
var DeleteSetupV1ResourcesIdServicesPathParams = /** @class */ (function (_super) {
    __extends(DeleteSetupV1ResourcesIdServicesPathParams, _super);
    function DeleteSetupV1ResourcesIdServicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteSetupV1ResourcesIdServicesPathParams.prototype, "id", void 0);
    return DeleteSetupV1ResourcesIdServicesPathParams;
}(SpeakeasyBase));
export { DeleteSetupV1ResourcesIdServicesPathParams };
var DeleteSetupV1ResourcesIdServicesRequest = /** @class */ (function (_super) {
    __extends(DeleteSetupV1ResourcesIdServicesRequest, _super);
    function DeleteSetupV1ResourcesIdServicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSetupV1ResourcesIdServicesPathParams)
    ], DeleteSetupV1ResourcesIdServicesRequest.prototype, "pathParams", void 0);
    return DeleteSetupV1ResourcesIdServicesRequest;
}(SpeakeasyBase));
export { DeleteSetupV1ResourcesIdServicesRequest };
var DeleteSetupV1ResourcesIdServicesResponse = /** @class */ (function (_super) {
    __extends(DeleteSetupV1ResourcesIdServicesResponse, _super);
    function DeleteSetupV1ResourcesIdServicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSetupV1ResourcesIdServicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceViewModel)
    ], DeleteSetupV1ResourcesIdServicesResponse.prototype, "resourceViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSetupV1ResourcesIdServicesResponse.prototype, "statusCode", void 0);
    return DeleteSetupV1ResourcesIdServicesResponse;
}(SpeakeasyBase));
export { DeleteSetupV1ResourcesIdServicesResponse };
