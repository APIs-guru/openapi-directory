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
import { GoogleFirestoreAdminV1IndexConfig } from "./googlefirestoreadminv1indexconfig";
import { GoogleFirestoreAdminV1TtlConfig } from "./googlefirestoreadminv1ttlconfig";
// GoogleFirestoreAdminV1Field
/**
 * Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.
**/
var GoogleFirestoreAdminV1Field = /** @class */ (function (_super) {
    __extends(GoogleFirestoreAdminV1Field, _super);
    function GoogleFirestoreAdminV1Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexConfig" }),
        __metadata("design:type", GoogleFirestoreAdminV1IndexConfig)
    ], GoogleFirestoreAdminV1Field.prototype, "indexConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Field.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttlConfig" }),
        __metadata("design:type", GoogleFirestoreAdminV1TtlConfig)
    ], GoogleFirestoreAdminV1Field.prototype, "ttlConfig", void 0);
    return GoogleFirestoreAdminV1Field;
}(SpeakeasyBase));
export { GoogleFirestoreAdminV1Field };
