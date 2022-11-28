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
import { GoogleIdentityAccesscontextmanagerV1ApiOperation } from "./googleidentityaccesscontextmanagerv1apioperation";
// GoogleIdentityAccesscontextmanagerV1EgressTo
/**
 * Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter.
**/
var GoogleIdentityAccesscontextmanagerV1EgressTo = /** @class */ (function (_super) {
    __extends(GoogleIdentityAccesscontextmanagerV1EgressTo, _super);
    function GoogleIdentityAccesscontextmanagerV1EgressTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalResources" }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1EgressTo.prototype, "externalResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operations", elemType: GoogleIdentityAccesscontextmanagerV1ApiOperation }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1EgressTo.prototype, "operations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources" }),
        __metadata("design:type", Array)
    ], GoogleIdentityAccesscontextmanagerV1EgressTo.prototype, "resources", void 0);
    return GoogleIdentityAccesscontextmanagerV1EgressTo;
}(SpeakeasyBase));
export { GoogleIdentityAccesscontextmanagerV1EgressTo };
