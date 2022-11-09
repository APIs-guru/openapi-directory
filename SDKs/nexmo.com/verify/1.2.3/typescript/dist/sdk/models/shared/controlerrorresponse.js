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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var ControlErrorResponseStatusEnum;
(function (ControlErrorResponseStatusEnum) {
    ControlErrorResponseStatusEnum["Zero"] = "0";
    ControlErrorResponseStatusEnum["One"] = "1";
    ControlErrorResponseStatusEnum["Two"] = "2";
    ControlErrorResponseStatusEnum["Three"] = "3";
    ControlErrorResponseStatusEnum["Four"] = "4";
    ControlErrorResponseStatusEnum["Five"] = "5";
    ControlErrorResponseStatusEnum["Six"] = "6";
    ControlErrorResponseStatusEnum["Eight"] = "8";
    ControlErrorResponseStatusEnum["Nine"] = "9";
    ControlErrorResponseStatusEnum["Nineteen"] = "19";
})(ControlErrorResponseStatusEnum || (ControlErrorResponseStatusEnum = {}));
// ControlErrorResponse
/**
 * Error
**/
var ControlErrorResponse = /** @class */ (function (_super) {
    __extends(ControlErrorResponse, _super);
    function ControlErrorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error_text" }),
        __metadata("design:type", String)
    ], ControlErrorResponse.prototype, "errorText", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ControlErrorResponse.prototype, "status", void 0);
    return ControlErrorResponse;
}(SpeakeasyBase));
export { ControlErrorResponse };
