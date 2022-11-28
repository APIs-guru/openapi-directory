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
var DcimPowerPortTemplatesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DcimPowerPortTemplatesUpdatePathParams, _super);
    function DcimPowerPortTemplatesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DcimPowerPortTemplatesUpdatePathParams.prototype, "id", void 0);
    return DcimPowerPortTemplatesUpdatePathParams;
}(SpeakeasyBase));
export { DcimPowerPortTemplatesUpdatePathParams };
var DcimPowerPortTemplatesUpdateRequest = /** @class */ (function (_super) {
    __extends(DcimPowerPortTemplatesUpdateRequest, _super);
    function DcimPowerPortTemplatesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimPowerPortTemplatesUpdatePathParams)
    ], DcimPowerPortTemplatesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WritablePowerPortTemplateInput)
    ], DcimPowerPortTemplatesUpdateRequest.prototype, "request", void 0);
    return DcimPowerPortTemplatesUpdateRequest;
}(SpeakeasyBase));
export { DcimPowerPortTemplatesUpdateRequest };
var DcimPowerPortTemplatesUpdateResponse = /** @class */ (function (_super) {
    __extends(DcimPowerPortTemplatesUpdateResponse, _super);
    function DcimPowerPortTemplatesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimPowerPortTemplatesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PowerPortTemplate)
    ], DcimPowerPortTemplatesUpdateResponse.prototype, "powerPortTemplate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimPowerPortTemplatesUpdateResponse.prototype, "statusCode", void 0);
    return DcimPowerPortTemplatesUpdateResponse;
}(SpeakeasyBase));
export { DcimPowerPortTemplatesUpdateResponse };
