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
export var UpdatePageElementsZOrderRequestOperationEnum;
(function (UpdatePageElementsZOrderRequestOperationEnum) {
    UpdatePageElementsZOrderRequestOperationEnum["ZOrderOperationUnspecified"] = "Z_ORDER_OPERATION_UNSPECIFIED";
    UpdatePageElementsZOrderRequestOperationEnum["BringToFront"] = "BRING_TO_FRONT";
    UpdatePageElementsZOrderRequestOperationEnum["BringForward"] = "BRING_FORWARD";
    UpdatePageElementsZOrderRequestOperationEnum["SendBackward"] = "SEND_BACKWARD";
    UpdatePageElementsZOrderRequestOperationEnum["SendToBack"] = "SEND_TO_BACK";
})(UpdatePageElementsZOrderRequestOperationEnum || (UpdatePageElementsZOrderRequestOperationEnum = {}));
// UpdatePageElementsZOrderRequest
/**
 * Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.
**/
var UpdatePageElementsZOrderRequest = /** @class */ (function (_super) {
    __extends(UpdatePageElementsZOrderRequest, _super);
    function UpdatePageElementsZOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], UpdatePageElementsZOrderRequest.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageElementObjectIds" }),
        __metadata("design:type", Array)
    ], UpdatePageElementsZOrderRequest.prototype, "pageElementObjectIds", void 0);
    return UpdatePageElementsZOrderRequest;
}(SpeakeasyBase));
export { UpdatePageElementsZOrderRequest };
