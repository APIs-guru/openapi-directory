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
import { CreateItemRequestInput } from "./createitemrequest";
import { DeleteItemRequest } from "./deleteitemrequest";
import { MoveItemRequest } from "./moveitemrequest";
import { UpdateFormInfoRequestInput } from "./updateforminforequest";
import { UpdateItemRequestInput } from "./updateitemrequest";
import { UpdateSettingsRequest } from "./updatesettingsrequest";
// RequestInput
/**
 * The kinds of update requests that can be made.
**/
var RequestInput = /** @class */ (function (_super) {
    __extends(RequestInput, _super);
    function RequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createItem" }),
        __metadata("design:type", CreateItemRequestInput)
    ], RequestInput.prototype, "createItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteItem" }),
        __metadata("design:type", DeleteItemRequest)
    ], RequestInput.prototype, "deleteItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moveItem" }),
        __metadata("design:type", MoveItemRequest)
    ], RequestInput.prototype, "moveItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateFormInfo" }),
        __metadata("design:type", UpdateFormInfoRequestInput)
    ], RequestInput.prototype, "updateFormInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateItem" }),
        __metadata("design:type", UpdateItemRequestInput)
    ], RequestInput.prototype, "updateItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateSettings" }),
        __metadata("design:type", UpdateSettingsRequest)
    ], RequestInput.prototype, "updateSettings", void 0);
    return RequestInput;
}(SpeakeasyBase));
export { RequestInput };
