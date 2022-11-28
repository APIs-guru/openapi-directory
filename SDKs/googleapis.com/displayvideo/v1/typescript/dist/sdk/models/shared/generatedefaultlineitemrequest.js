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
import { MobileAppInput } from "./mobileapp";
export var GenerateDefaultLineItemRequestLineItemTypeEnum;
(function (GenerateDefaultLineItemRequestLineItemTypeEnum) {
    GenerateDefaultLineItemRequestLineItemTypeEnum["LineItemTypeUnspecified"] = "LINE_ITEM_TYPE_UNSPECIFIED";
    GenerateDefaultLineItemRequestLineItemTypeEnum["LineItemTypeDisplayDefault"] = "LINE_ITEM_TYPE_DISPLAY_DEFAULT";
    GenerateDefaultLineItemRequestLineItemTypeEnum["LineItemTypeDisplayMobileAppInstall"] = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL";
    GenerateDefaultLineItemRequestLineItemTypeEnum["LineItemTypeVideoDefault"] = "LINE_ITEM_TYPE_VIDEO_DEFAULT";
    GenerateDefaultLineItemRequestLineItemTypeEnum["LineItemTypeVideoMobileAppInstall"] = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL";
    GenerateDefaultLineItemRequestLineItemTypeEnum["LineItemTypeDisplayMobileAppInventory"] = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY";
    GenerateDefaultLineItemRequestLineItemTypeEnum["LineItemTypeVideoMobileAppInventory"] = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY";
    GenerateDefaultLineItemRequestLineItemTypeEnum["LineItemTypeAudioDefault"] = "LINE_ITEM_TYPE_AUDIO_DEFAULT";
    GenerateDefaultLineItemRequestLineItemTypeEnum["LineItemTypeVideoOverTheTop"] = "LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP";
})(GenerateDefaultLineItemRequestLineItemTypeEnum || (GenerateDefaultLineItemRequestLineItemTypeEnum = {}));
// GenerateDefaultLineItemRequestInput
/**
 * Request message for LineItemService.GenerateDefaultLineItem.
**/
var GenerateDefaultLineItemRequestInput = /** @class */ (function (_super) {
    __extends(GenerateDefaultLineItemRequestInput, _super);
    function GenerateDefaultLineItemRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GenerateDefaultLineItemRequestInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertionOrderId" }),
        __metadata("design:type", String)
    ], GenerateDefaultLineItemRequestInput.prototype, "insertionOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItemType" }),
        __metadata("design:type", String)
    ], GenerateDefaultLineItemRequestInput.prototype, "lineItemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileApp" }),
        __metadata("design:type", MobileAppInput)
    ], GenerateDefaultLineItemRequestInput.prototype, "mobileApp", void 0);
    return GenerateDefaultLineItemRequestInput;
}(SpeakeasyBase));
export { GenerateDefaultLineItemRequestInput };
