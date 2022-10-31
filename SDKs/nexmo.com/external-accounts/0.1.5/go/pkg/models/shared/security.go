package shared



type SchemeBasicAuth struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemeBearerAuth struct {
    Authorization string `security:"name=Authorization"`
    
}

