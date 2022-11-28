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
import { Proto2EnumDescriptorProto } from "./proto2enumdescriptorproto";
import { Proto2DescriptorProto } from "./proto2descriptorproto";
// Proto2FileDescriptorProto
/**
 * Describes a complete .proto file.
**/
var Proto2FileDescriptorProto = /** @class */ (function (_super) {
    __extends(Proto2FileDescriptorProto, _super);
    function Proto2FileDescriptorProto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enumType", elemType: Proto2EnumDescriptorProto }),
        __metadata("design:type", Array)
    ], Proto2FileDescriptorProto.prototype, "enumType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageType", elemType: Proto2DescriptorProto }),
        __metadata("design:type", Array)
    ], Proto2FileDescriptorProto.prototype, "messageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Proto2FileDescriptorProto.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=package" }),
        __metadata("design:type", String)
    ], Proto2FileDescriptorProto.prototype, "package", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syntax" }),
        __metadata("design:type", String)
    ], Proto2FileDescriptorProto.prototype, "syntax", void 0);
    return Proto2FileDescriptorProto;
}(SpeakeasyBase));
export { Proto2FileDescriptorProto };
