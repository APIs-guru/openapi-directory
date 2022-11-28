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
var DcimInterfaceTemplatesPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(DcimInterfaceTemplatesPartialUpdatePathParams, _super);
    function DcimInterfaceTemplatesPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DcimInterfaceTemplatesPartialUpdatePathParams.prototype, "id", void 0);
    return DcimInterfaceTemplatesPartialUpdatePathParams;
}(SpeakeasyBase));
export { DcimInterfaceTemplatesPartialUpdatePathParams };
var DcimInterfaceTemplatesPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(DcimInterfaceTemplatesPartialUpdateRequest, _super);
    function DcimInterfaceTemplatesPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimInterfaceTemplatesPartialUpdatePathParams)
    ], DcimInterfaceTemplatesPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WritableInterfaceTemplateInput)
    ], DcimInterfaceTemplatesPartialUpdateRequest.prototype, "request", void 0);
    return DcimInterfaceTemplatesPartialUpdateRequest;
}(SpeakeasyBase));
export { DcimInterfaceTemplatesPartialUpdateRequest };
var DcimInterfaceTemplatesPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(DcimInterfaceTemplatesPartialUpdateResponse, _super);
    function DcimInterfaceTemplatesPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimInterfaceTemplatesPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InterfaceTemplate)
    ], DcimInterfaceTemplatesPartialUpdateResponse.prototype, "interfaceTemplate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimInterfaceTemplatesPartialUpdateResponse.prototype, "statusCode", void 0);
    return DcimInterfaceTemplatesPartialUpdateResponse;
}(SpeakeasyBase));
export { DcimInterfaceTemplatesPartialUpdateResponse };
