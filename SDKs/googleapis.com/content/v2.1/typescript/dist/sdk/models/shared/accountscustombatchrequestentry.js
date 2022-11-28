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
import { AccountInput } from "./account";
import { AccountsCustomBatchRequestEntryLinkRequest } from "./accountscustombatchrequestentrylinkrequest";
// AccountsCustomBatchRequestEntryInput
/**
 * A batch entry encoding a single non-batch accounts request.
**/
var AccountsCustomBatchRequestEntryInput = /** @class */ (function (_super) {
    __extends(AccountsCustomBatchRequestEntryInput, _super);
    function AccountsCustomBatchRequestEntryInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", AccountInput)
    ], AccountsCustomBatchRequestEntryInput.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], AccountsCustomBatchRequestEntryInput.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchId" }),
        __metadata("design:type", Number)
    ], AccountsCustomBatchRequestEntryInput.prototype, "batchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=force" }),
        __metadata("design:type", Boolean)
    ], AccountsCustomBatchRequestEntryInput.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelIds" }),
        __metadata("design:type", Array)
    ], AccountsCustomBatchRequestEntryInput.prototype, "labelIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkRequest" }),
        __metadata("design:type", AccountsCustomBatchRequestEntryLinkRequest)
    ], AccountsCustomBatchRequestEntryInput.prototype, "linkRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantId" }),
        __metadata("design:type", String)
    ], AccountsCustomBatchRequestEntryInput.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], AccountsCustomBatchRequestEntryInput.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overwrite" }),
        __metadata("design:type", Boolean)
    ], AccountsCustomBatchRequestEntryInput.prototype, "overwrite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], AccountsCustomBatchRequestEntryInput.prototype, "view", void 0);
    return AccountsCustomBatchRequestEntryInput;
}(SpeakeasyBase));
export { AccountsCustomBatchRequestEntryInput };
