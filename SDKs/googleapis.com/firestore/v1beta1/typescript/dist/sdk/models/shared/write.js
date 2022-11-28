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
import { Precondition } from "./precondition";
import { DocumentTransform } from "./documenttransform";
import { Document } from "./document";
import { DocumentMask } from "./documentmask";
import { FieldTransform } from "./fieldtransform";
// Write
/**
 * A write on a document.
**/
var Write = /** @class */ (function (_super) {
    __extends(Write, _super);
    function Write() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentDocument" }),
        __metadata("design:type", Precondition)
    ], Write.prototype, "currentDocument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", String)
    ], Write.prototype, "delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transform" }),
        __metadata("design:type", DocumentTransform)
    ], Write.prototype, "transform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update" }),
        __metadata("design:type", Document)
    ], Write.prototype, "update", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateMask" }),
        __metadata("design:type", DocumentMask)
    ], Write.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTransforms", elemType: FieldTransform }),
        __metadata("design:type", Array)
    ], Write.prototype, "updateTransforms", void 0);
    return Write;
}(SpeakeasyBase));
export { Write };
