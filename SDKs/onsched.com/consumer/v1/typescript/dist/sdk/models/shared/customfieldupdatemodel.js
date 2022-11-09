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
var CustomFieldUpdateModel = /** @class */ (function (_super) {
    __extends(CustomFieldUpdateModel, _super);
    function CustomFieldUpdateModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=field1" }),
        __metadata("design:type", String)
    ], CustomFieldUpdateModel.prototype, "field1", void 0);
    __decorate([
        Metadata({ data: "json, name=field10" }),
        __metadata("design:type", String)
    ], CustomFieldUpdateModel.prototype, "field10", void 0);
    __decorate([
        Metadata({ data: "json, name=field2" }),
        __metadata("design:type", String)
    ], CustomFieldUpdateModel.prototype, "field2", void 0);
    __decorate([
        Metadata({ data: "json, name=field3" }),
        __metadata("design:type", String)
    ], CustomFieldUpdateModel.prototype, "field3", void 0);
    __decorate([
        Metadata({ data: "json, name=field4" }),
        __metadata("design:type", String)
    ], CustomFieldUpdateModel.prototype, "field4", void 0);
    __decorate([
        Metadata({ data: "json, name=field5" }),
        __metadata("design:type", String)
    ], CustomFieldUpdateModel.prototype, "field5", void 0);
    __decorate([
        Metadata({ data: "json, name=field6" }),
        __metadata("design:type", String)
    ], CustomFieldUpdateModel.prototype, "field6", void 0);
    __decorate([
        Metadata({ data: "json, name=field7" }),
        __metadata("design:type", String)
    ], CustomFieldUpdateModel.prototype, "field7", void 0);
    __decorate([
        Metadata({ data: "json, name=field8" }),
        __metadata("design:type", String)
    ], CustomFieldUpdateModel.prototype, "field8", void 0);
    __decorate([
        Metadata({ data: "json, name=field9" }),
        __metadata("design:type", String)
    ], CustomFieldUpdateModel.prototype, "field9", void 0);
    return CustomFieldUpdateModel;
}(SpeakeasyBase));
export { CustomFieldUpdateModel };
