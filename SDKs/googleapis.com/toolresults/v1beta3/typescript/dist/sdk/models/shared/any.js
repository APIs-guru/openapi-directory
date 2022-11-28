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
// Any
/**
 *  `Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++. Foo foo = ...; Any any; any.PackFrom(foo); ... if (any.UnpackTo(&foo)) { ... } Example 2: Pack and unpack a message in Java. Foo foo = ...; Any any = Any.pack(foo); ... if (any.is(Foo.class)) { foo = any.unpack(Foo.class); } Example 3: Pack and unpack a message in Python. foo = Foo(...) any = Any() any.Pack(foo) ... if any.Is(Foo.DESCRIPTOR): any.Unpack(foo) ... Example 4: Pack and unpack a message in Go foo := &pb.Foo{...} any, err := ptypes.MarshalAny(foo) ... foo := &pb.Foo{} if err := ptypes.UnmarshalAny(any, foo); err != nil { ... } The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example "foo.bar.com/x/y.z" will yield type name "y.z". # JSON The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example: package google.profile; message Person { string first_name = 1; string last_name = 2; } { "@type": "type.googleapis.com/google.profile.Person", "firstName": , "lastName": } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message google.protobuf.Duration): { "@type": "type.googleapis.com/google.protobuf.Duration", "value": "1.212s" }
**/
var Any = /** @class */ (function (_super) {
    __extends(Any, _super);
    function Any() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typeUrl" }),
        __metadata("design:type", String)
    ], Any.prototype, "typeUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Any.prototype, "value", void 0);
    return Any;
}(SpeakeasyBase));
export { Any };
