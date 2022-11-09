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
export var GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum;
(function (GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum) {
    GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum["ArrayConfigUnspecified"] = "ARRAY_CONFIG_UNSPECIFIED";
    GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum["Contains"] = "CONTAINS";
})(GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum || (GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum = {}));
export var GoogleFirestoreAdminV1beta2IndexFieldOrderEnum;
(function (GoogleFirestoreAdminV1beta2IndexFieldOrderEnum) {
    GoogleFirestoreAdminV1beta2IndexFieldOrderEnum["OrderUnspecified"] = "ORDER_UNSPECIFIED";
    GoogleFirestoreAdminV1beta2IndexFieldOrderEnum["Ascending"] = "ASCENDING";
    GoogleFirestoreAdminV1beta2IndexFieldOrderEnum["Descending"] = "DESCENDING";
})(GoogleFirestoreAdminV1beta2IndexFieldOrderEnum || (GoogleFirestoreAdminV1beta2IndexFieldOrderEnum = {}));
// GoogleFirestoreAdminV1beta2IndexField
/**
 * A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.
**/
var GoogleFirestoreAdminV1beta2IndexField = /** @class */ (function (_super) {
    __extends(GoogleFirestoreAdminV1beta2IndexField, _super);
    function GoogleFirestoreAdminV1beta2IndexField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=arrayConfig" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1beta2IndexField.prototype, "arrayConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=fieldPath" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1beta2IndexField.prototype, "fieldPath", void 0);
    __decorate([
        Metadata({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1beta2IndexField.prototype, "order", void 0);
    return GoogleFirestoreAdminV1beta2IndexField;
}(SpeakeasyBase));
export { GoogleFirestoreAdminV1beta2IndexField };
