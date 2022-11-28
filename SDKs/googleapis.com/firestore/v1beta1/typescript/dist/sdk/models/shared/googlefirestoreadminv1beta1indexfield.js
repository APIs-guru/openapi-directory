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
export var GoogleFirestoreAdminV1beta1IndexFieldModeEnum;
(function (GoogleFirestoreAdminV1beta1IndexFieldModeEnum) {
    GoogleFirestoreAdminV1beta1IndexFieldModeEnum["ModeUnspecified"] = "MODE_UNSPECIFIED";
    GoogleFirestoreAdminV1beta1IndexFieldModeEnum["Ascending"] = "ASCENDING";
    GoogleFirestoreAdminV1beta1IndexFieldModeEnum["Descending"] = "DESCENDING";
    GoogleFirestoreAdminV1beta1IndexFieldModeEnum["ArrayContains"] = "ARRAY_CONTAINS";
})(GoogleFirestoreAdminV1beta1IndexFieldModeEnum || (GoogleFirestoreAdminV1beta1IndexFieldModeEnum = {}));
// GoogleFirestoreAdminV1beta1IndexField
/**
 * A field of an index.
**/
var GoogleFirestoreAdminV1beta1IndexField = /** @class */ (function (_super) {
    __extends(GoogleFirestoreAdminV1beta1IndexField, _super);
    function GoogleFirestoreAdminV1beta1IndexField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldPath" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1beta1IndexField.prototype, "fieldPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1beta1IndexField.prototype, "mode", void 0);
    return GoogleFirestoreAdminV1beta1IndexField;
}(SpeakeasyBase));
export { GoogleFirestoreAdminV1beta1IndexField };
