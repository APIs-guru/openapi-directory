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
import { MetadataOptions } from "./metadataoptions";
export var TransferOptionsOverwriteWhenEnum;
(function (TransferOptionsOverwriteWhenEnum) {
    TransferOptionsOverwriteWhenEnum["OverwriteWhenUnspecified"] = "OVERWRITE_WHEN_UNSPECIFIED";
    TransferOptionsOverwriteWhenEnum["Different"] = "DIFFERENT";
    TransferOptionsOverwriteWhenEnum["Never"] = "NEVER";
    TransferOptionsOverwriteWhenEnum["Always"] = "ALWAYS";
})(TransferOptionsOverwriteWhenEnum || (TransferOptionsOverwriteWhenEnum = {}));
// TransferOptions
/**
 * TransferOptions define the actions to be performed on objects in a transfer.
**/
var TransferOptions = /** @class */ (function (_super) {
    __extends(TransferOptions, _super);
    function TransferOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteObjectsFromSourceAfterTransfer" }),
        __metadata("design:type", Boolean)
    ], TransferOptions.prototype, "deleteObjectsFromSourceAfterTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteObjectsUniqueInSink" }),
        __metadata("design:type", Boolean)
    ], TransferOptions.prototype, "deleteObjectsUniqueInSink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataOptions" }),
        __metadata("design:type", MetadataOptions)
    ], TransferOptions.prototype, "metadataOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overwriteObjectsAlreadyExistingInSink" }),
        __metadata("design:type", Boolean)
    ], TransferOptions.prototype, "overwriteObjectsAlreadyExistingInSink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overwriteWhen" }),
        __metadata("design:type", String)
    ], TransferOptions.prototype, "overwriteWhen", void 0);
    return TransferOptions;
}(SpeakeasyBase));
export { TransferOptions };
