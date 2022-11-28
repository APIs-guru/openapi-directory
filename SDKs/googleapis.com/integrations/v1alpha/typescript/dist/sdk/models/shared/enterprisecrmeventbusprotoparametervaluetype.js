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
import { EnterpriseCrmEventbusProtoBooleanParameterArray } from "./enterprisecrmeventbusprotobooleanparameterarray";
import { EnterpriseCrmEventbusProtoDoubleParameterArray } from "./enterprisecrmeventbusprotodoubleparameterarray";
import { EnterpriseCrmEventbusProtoIntParameterArray } from "./enterprisecrmeventbusprotointparameterarray";
import { EnterpriseCrmEventbusProtoProtoParameterArray } from "./enterprisecrmeventbusprotoprotoparameterarray";
import { EnterpriseCrmEventbusProtoSerializedObjectParameter } from "./enterprisecrmeventbusprotoserializedobjectparameter";
import { EnterpriseCrmEventbusProtoStringParameterArray } from "./enterprisecrmeventbusprotostringparameterarray";
// EnterpriseCrmEventbusProtoParameterValueType
/**
 * LINT.IfChange To support various types of parameter values. Next available id: 14
**/
var EnterpriseCrmEventbusProtoParameterValueType = /** @class */ (function (_super) {
    __extends(EnterpriseCrmEventbusProtoParameterValueType, _super);
    function EnterpriseCrmEventbusProtoParameterValueType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booleanArray" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoBooleanParameterArray)
    ], EnterpriseCrmEventbusProtoParameterValueType.prototype, "booleanArray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booleanValue" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmEventbusProtoParameterValueType.prototype, "booleanValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doubleArray" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoDoubleParameterArray)
    ], EnterpriseCrmEventbusProtoParameterValueType.prototype, "doubleArray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doubleValue" }),
        __metadata("design:type", Number)
    ], EnterpriseCrmEventbusProtoParameterValueType.prototype, "doubleValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intArray" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoIntParameterArray)
    ], EnterpriseCrmEventbusProtoParameterValueType.prototype, "intArray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intValue" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoParameterValueType.prototype, "intValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protoArray" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoProtoParameterArray)
    ], EnterpriseCrmEventbusProtoParameterValueType.prototype, "protoArray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protoValue" }),
        __metadata("design:type", Map)
    ], EnterpriseCrmEventbusProtoParameterValueType.prototype, "protoValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serializedObjectValue" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoSerializedObjectParameter)
    ], EnterpriseCrmEventbusProtoParameterValueType.prototype, "serializedObjectValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringArray" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoStringParameterArray)
    ], EnterpriseCrmEventbusProtoParameterValueType.prototype, "stringArray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringValue" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoParameterValueType.prototype, "stringValue", void 0);
    return EnterpriseCrmEventbusProtoParameterValueType;
}(SpeakeasyBase));
export { EnterpriseCrmEventbusProtoParameterValueType };
